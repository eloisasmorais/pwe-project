package votar;

import java.sql.ResultSet;
import java.sql.SQLException;
import database.DBQuery;

public class Votar {
	private String id;

	private String tableName	= "categories_games"; 
	private String fieldsName	= "votes";  
	private String fieldKey		= "id_category_game";
	private DBQuery dbQuery = new DBQuery(tableName, fieldsName, fieldKey);
	
	public Votar(String id) {
		this.id = id;
	}
	
	public int registerVote() {
		
		try {
			ResultSet data = this.dbQuery.select("game_id = '"+ this.id + "'");
			int votos = data.getInt("votes");
			int rs = statement.executeUpdate(
				"UPDATE votar.categories_games SET votes = 1 WHERE game_id = '" + this.id + "'"
			);
			return (rs);
		}catch (SQLException e) {
			System.out.println("\nErro: Verifique o comando ou a dependencia de chave extrangeira!");
		}
		
		return 0;
	}
	
	public String getId() {
		return this.id;
	}
 }
