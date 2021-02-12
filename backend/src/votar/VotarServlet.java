package votar;


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import database.DBQuery;

/**
 * Servlet implementation class Votar
 */
@WebServlet("/votar")
public class VotarServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private String tableName	= "votar.votos"; 
	private String fieldsName	= "idUsuario, email, senha, idNivelUsuario, nome, cpf, endereco, bairro, cidade, uf, cep, telefone, foto, ativo";  
	private String fieldKey		= "idUsuario";
	
	//private DBQuery dbQuery = new DBQuery(tableName, fieldsName, fieldKey);
	private Gson gson = new Gson();
   
    public VotarServlet() {
        super();
    }
    
    

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JsonObject jsonData = gson.fromJson(request.getReader(), JsonObject.class);
		
		JsonElement votos = jsonData.getAsJsonArray("votos");
		Votar[] votosArray = gson.fromJson(votos, Votar[].class);
		
		for (int i = 0; i < votosArray.length; i++) {
			votosArray[i].registerVote();
		}
		
		
		
		//Votar voto = new Votar(id);
		
		//voto.registerVote();
		
		PrintWriter out = response.getWriter();
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	    response.setHeader("Access-Control-Allow-Methods", "POST");
	    response.setHeader("Access-Control-Max-Age", "3600");
	    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
		//out.print(json);
		out.flush();
	}

}
