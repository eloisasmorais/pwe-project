package votar;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import database.DBQuery;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

@WebServlet("/categorias")
public class CategoriaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private String tableName	= "categories"; 
	private String fieldsName	= "id_categoria, nome, descricao, total_votos";  
	private String fieldKey		= "id_categoria";
	private DBQuery dbQuery = new DBQuery(tableName, fieldsName, fieldKey);
	private DBQuery dbQueryGames = new DBQuery(tableName, "games.game_id, games.game_name", fieldKey);
	
	private Gson gson = new Gson();
    
    public CategoriaServlet() {
        super();
        
    }

	protected void doGet(
		HttpServletRequest request, 
		HttpServletResponse response) throws ServletException, IOException {
		
		Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();
		
		Categoria categoria = new Categoria();
		Categoria categoria2 = null;
		ResultSet cat = categoria.getList();
		
		List<Categoria> categoriasArray  = new ArrayList<Categoria>();
		
		try {
			while (cat.next()) {
				
				ResultSet jogosRes  = this.dbQueryGames.selectWithInnerJoin(
						" INNER JOIN categories_games ON categories.id_categoria = categories_games.category_id INNER JOIN games ON categories_games.game_id = games.game_id","id_categoria = '" + cat.getString("id_categoria") + "'" );
				
				try {
					List<Jogo> jogos = new ArrayList<>();
					
					while (jogosRes.next()) {  
						Jogo jogo = new Jogo(jogosRes.getString("game_id"), jogosRes.getString("game_name"));
						System.out.println("gameId " + jogosRes.getString("game_id"));
						System.out.println("name " + jogosRes.getString("game_name"));
						jogos.add(jogo);	
						
						
					}
					
					categoria2 = new Categoria(cat.getString("id_categoria"), cat.getString("nome"), cat.getString("descricao"), cat.getInt("total_votos"), jogos);
					categoriasArray.add(categoria2);
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			
			String json = gson.toJson(categoriasArray);
			
			response.setContentType("application/json");
			response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		    response.setHeader("Access-Control-Allow-Methods", "GET");
		    response.setHeader("Access-Control-Max-Age", "3600");
		    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
			response.getWriter().write(json);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JsonObject jsonData = gson.fromJson(request.getReader(), JsonObject.class);
	
		JsonElement categorias = jsonData.get("categorias");
		System.out.println(categorias);
		Categoria[] categoriasArray = gson.fromJson(categorias, Categoria[].class);
		
		for (int i = 0; i < categoriasArray.length; i++) {
			categoriasArray[i].insertCategoria();
		}
		
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	    response.setHeader("Access-Control-Allow-Methods", "POST");
	    response.setHeader("Access-Control-Max-Age", "3600");
	    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
		PrintWriter out = response.getWriter(); 
	
		out.flush();
	}
} 
