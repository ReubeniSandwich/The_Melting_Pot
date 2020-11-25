
public class Settings {

	/** The volume setting */
	private int volume; // Initialized to 0
	
	/** Whether hints are currently enabled */
	private boolean hintsEnabled; // Initialized to false
	
	/** A customizable setting for aesthetic purposes */
	private ColorScheme colorScheme; // TODO implement this
	
	/** The current language */
	private Language language; // TODO implement this
	
	public Settings() {
		this.volume = 0;
		this.hintsEnabled = false;
		this.colorScheme = ColorScheme.DEFAULT;
		this.language = Language.ENGLISH;
	}
	
	public int getVolume() {
		return this.volume;
	}
	
	public void setVolume(int volume) {
		this.volume = volume;
	}
	
	/**
	 * Toggles the hintsEnabled setting
	 * @return the new hintsEnabled setting
	 */
	public boolean toggleHints() {
		if (this.hintsEnabled) {
			this.hintsEnabled = false;
		} else {
			this.hintsEnabled = true;
		}
		return this.hintsEnabled;
	}

	public Language getLanguage() {
		return this.language;
	}
	
	public void setLanguage(Language language) {
		this.language = language;
	}
	
	public ColorScheme getColorScheme() {
		return this.colorScheme;
	}
	
	public void setColorScheme(ColorScheme colorScheme) {
		this.colorScheme = colorScheme;
	}
	
}
