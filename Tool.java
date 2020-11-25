
public class Tool {

	/** The name of the tool */
	private final String name; // Initialized with Constructor
	
	/** A description of the tool */
	private final String description; // Initialized with Constructor
	
	/** The unit of measure for the different setting options; e.g. "Temperature (F)" for an oven */
	private final String settingsUnit; // Initialized with Constructor
	
	/** The value for the different settings options; e.g. "400" for an ovenm */
	private int settingsValue; // Initialized to 0
	
	/** Whether the tool is currently interactable */
	private boolean interactable; // Initialized to false
	
	/** Whether the tool is currently visible */
	private boolean visible; // Initialized to false
	
	public Tool(String name, String description, String unit) {
		this.name = name;
		this.description = description;
		this.settingsUnit = unit;
		this.settingsValue = 0;
		this.interactable = false;
		this.visible = false;
	}
	
	public String getName() {
		return this.name;
	}
	
	public String getDescription() {
		return this.description;
	}
	
	public String getUnit() {
		return this.settingsUnit;
	}
	
	public int getValue() {
		return this.settingsValue;
	}
	
	public void setValue(int value) {
		this.settingsValue = value;
	}
	
	public boolean getInteractable() {
		return this.interactable;
	}
	
	public void setInteractable(boolean interactable) {
		this.interactable = interactable;
	}
	
	public boolean getVisibility() {
		return this.visible;
	}
	
	public void setVisibility(boolean visible) {
		this.visible = visible;
	}
	
}
