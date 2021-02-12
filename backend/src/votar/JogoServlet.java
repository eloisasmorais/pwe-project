package votar;

import java.io.IOException;
import java.io.PrintWriter;
//import java.io.PrintWriter;
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
 * Servlet implementation class JogoServlet
 */
@WebServlet("/jogos")
public class JogoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	

	private Gson gson = new Gson();
    
    public JogoServlet() {
        super();
        
    }

	protected void doGet(
			HttpServletRequest request, 
			HttpServletResponse response) throws ServletException, IOException {
		
		Jogo jogo = new Jogo();
		ResultSet cat = jogo.getGamesList();
		
		JsonArray jogosArray = new JsonArray();
		//PrintWriter out = response.getWriter();
		
		try {
			while (cat.next()) {
				JsonObject jogos = new JsonObject();
				jogos.addProperty("game_id", cat.getString("game_id"));
				jogos.addProperty("game_name", cat.getString("game_name"));
				
				jogosArray.add(jogos);
			}
			
			String json = this.gson.toJson(jogosArray);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
				response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
			    response.setHeader("Access-Control-Allow-Methods", "POST, GET");
			    response.setHeader("Access-Control-Max-Age", "3600");
			   response.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept");
			response.getWriter().write(json);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JsonObject jsonData = gson.fromJson(request.getReader(), JsonObject.class);
	
		JsonElement teste = jsonData.get("jogos");
		
		Jogo[] jogosArray = gson.fromJson(teste, Jogo[].class);
		
		for (int i = 0; i < jogosArray.length; i++) {
			jogosArray[i].insertGames();
			
		}
		
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	    response.setHeader("Access-Control-Allow-Methods", "POST, GET");
	    response.setHeader("Access-Control-Max-Age", "3600");
	    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
		PrintWriter out = response.getWriter(); 
	}


}
