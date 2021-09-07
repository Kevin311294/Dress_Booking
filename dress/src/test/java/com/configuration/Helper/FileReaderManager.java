package com.configuration.Helper;

public class FileReaderManager {

	private FileReaderManager() {
		
	}
	public static FileReaderManager getinstanceFR() {
		
		FileReaderManager helper = new FileReaderManager();
		return helper;
		
	

	}
	
	public configurationReader getinstanceCR() throws Throwable {
		configurationReader config = new configurationReader();
		return config;

	}
	
	
	
}
