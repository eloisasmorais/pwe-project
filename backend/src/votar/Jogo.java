package votar;

import java.sql.ResultSet;
import database.DBQuery;
import java.util.UUID;

import com.google.gson.annotations.Expose;	

public class Jogo {
	@Expose
	private String game_id;
	@Expose
	private String game_name;
	
	private String tableName	= "votar.games"; 
	private String fieldsName	= "game_id, game_name";  
	private String fieldKey		= "game_id";
	private DBQuery dbQuery = new DBQuery(tableName, fieldsName, fieldKey);
	
	public Jogo(String id, String name) {
		this.game_id = id;
		this.game_name = name;
	}
	
	public Jogo() { }
	
	public ResultSet getGamesList() {
		ResultSet games = this.dbQuery.select("");
		
		return games;
	}
	
	public void insertGames() {
		this.dbQuery.insert(this.toArray());
	}
	
	private String[] toArray() {
		String[] values = {UUID.randomUUID().toString(), this.game_name + ""}; 
		
		return values;
	}
	
	public String getName() {
		return this.game_name;
	}
	
	public String getId() {
		return this.game_id;
	}
	
	
	public void setName(String name) {
		this.game_name = name;
	}
	
	public void setId (String id) {
		this.game_id = id;
	}
	
}
