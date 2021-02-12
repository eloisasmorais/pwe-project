package votar;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

/**
 * Servlet implementation class CategoriaJogos
 */
@WebServlet("/categoria-jogos")
public class CategoriaJogosServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
      
	private Gson gson = new Gson();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CategoriaJogosServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Categoria categoria = new Categoria();
		ResultSet cat = categoria.getList();
		JsonArray categoriasArray = new JsonArray();
		//PrintWriter out = response.getWriter();
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");

		try {
			while (cat.next()) {
				//ResultSet games = categoria.getGames(cat.getString("id_categoria"));
				JsonObject categorias = new JsonObject();
				Jogo[] jogos = categoria.getGames();
				
				categorias.addProperty("id_categoria", cat.getString("id_categoria"));
				categorias.addProperty("nome", cat.getString("nome"));
				categorias.addProperty("descricao", cat.getString("descricao"));
				categorias.addProperty("total_votos", cat.getString("total_votos"));
				//categorias.addProperty("jogos", ));
				System.out.println("jogos");
				categoriasArray.add(categorias);
			}
			
			String json = this.gson.toJson(categoriasArray);
			response.getWriter().write(json);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
