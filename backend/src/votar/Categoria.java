package votar;

import java.sql.ResultSet;
import java.sql.SQLException;

import database.DBQuery;

import java.util.List;
import java.util.UUID;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.annotations.Expose;

public class Categoria {
	@Expose
	private String id_categoria;
	@Expose
	private String nome;
	@Expose
	private String descricao;
	@Expose
	private int total_votos;
	@Expose
	private List<Jogo> jogos; 
	
	private String tableName	= "categories"; 
	private String fieldsName	= "id_categoria, nome, descricao, total_votos";  
	private String fieldKey		= "id_categoria";
	private DBQuery dbQuery = new DBQuery(tableName, fieldsName, fieldKey);
	
	public Categoria() {}
	public Categoria(String id_categoria, String nome, String descricao, int total_votos, List<Jogo> jogos) {
		this.id_categoria = id_categoria;
		this.nome = nome;
		this.descricao = descricao;
		this.total_votos = 0;
		this.jogos = jogos;
	}
	
	public ResultSet getList() {
		ResultSet categorias = this.dbQuery.select("");
		
		return categorias;
	}
	
	public void setGames() {
		
		//System.out.print(jogosRes);
	}
	
	public void addGameToList(Jogo jogo) {
		this.jogos.add(jogo);
	}
	
	
	public String getName() {
		return this.nome;
	}
	
	public String getDescription() {
		return this.descricao;
	}
	

	public int getTotalVotos() {
		return this.total_votos;
	}

	
	public void insertCategoria() {
		this.dbQuery.insert(this.toArray());
	}
	
	private String[] toArray() {
		String[] values = {UUID.randomUUID().toString(), this.nome, this.descricao, this.total_votos + ""}; 
		
		return values;
	}
}
