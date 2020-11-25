import java.util.ArrayList;

public class MainMenuDriver {
	
	private static ArrayList<Recipe> recipeList;
	
	private static ArrayList<Recipe> unlockedRecipes;

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

	public boolean addRecipe(Recipe recipe) {
		try {
			recipeList.add(recipe);
			return true;
		} catch (Exception e) {
			// TODO handle this exception;
		}
		return false;
	}
	
	public void reset() {
		// TODO reset everything
	}
	
}
