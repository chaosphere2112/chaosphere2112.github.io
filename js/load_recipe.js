$(".body").ready(function(){
	var parse_xml = function (doc) {
		
		var root = doc.documentElement;
		
		function filter_nodes(childNodes, callback) {
			var filter = Array.prototype.filter;
			return filter.call(childNodes, callback);
		}

		function parse_element(el) {
			var children = el.childNodes;
			var child;
			var matched = 0;
			if (children.length > 1) {
				// Get only the element children
				var el_children = filter_nodes(children, function(obj) { return obj.nodeType === Node.ELEMENT_NODE; });
				
				// Get all element names
				var children_names = el_children.map(function(obj){
					return obj.nodeName;
				});

				// Deduplicate the element names
				var unique_names = children_names.filter(function(item, index, ar) {return ar.indexOf(item) === index;}, children_names);

				// Group the elements by name
				var grouped = {};
				var elements_of_type;
				for (var a=0; a<unique_names.length; a++) {

					elements_of_type = el_children.filter(function (obj) {
						return obj.nodeName == unique_names[a];
					});

					if (elements_of_type.length == 1) {
						grouped[unique_names[a]] = parse_element(elements_of_type[0]);
					} else {
						grouped[unique_names[a]] = elements_of_type.map(function(obj){
							return parse_element(obj);
						});
					}
				}
				return grouped;
			} else {
				var text = el.textContent;
				if (is_number(text)) {
					return Number(text);
				} else {
					return text;
				}
			}
		}

		var wrapped = {};

		wrapped[root.nodeName] = parse_element(root);
		return wrapped;
	}, // shorthand function
	make = function(type) {
		return $(document.createElement(type));
	},
	is_number = function(input) {
	    return (input - 0) == input && (''+input).trim().length > 0;
	},
	format = function(number, precision) {
		if (is_number(number)) {
			n = Number(number);
			return n.toPrecision(precision);
		} else {
			return number
		}
	},
	build_card = function(data) {
		var recipe = parse_xml(data);

		// We'll default to the first recipe in the file.
		if (recipe.RECIPES.RECIPE.length === undefined) {
			recipe = recipe.RECIPES.RECIPE;
		} else {
			recipe = recipe.RECIPES.RECIPE[0];
		}

		var $el = this;

		// Header
		var recipe_header = make("div").addClass("recipe_header");
		// Name
		recipe_header.append(make("h1").text(recipe.NAME + " (Version " + format(recipe.VERSION, 2) + ")"));
		recipe_header.append(make("p").text("Brewed on " + recipe.DATE + ", Efficiency: " + format(recipe.EFFICIENCY, 2) + "%"));

		// Stats
		var stats = make("dl").addClass("recipe_stats");
		//OG / FG / ABV / IBU
		stats.append(make("dt").text("OG"))
					.append(make("dd").text(format(recipe.OG, 4)))
					.append(make("dt").text("FG"))
					.append(make("dd").text(format(recipe.FG, 4)))
					.append(make("dt").text("ABV"))
					.append(make("dd").text(recipe.ABV))
					.append(make("dt").text("IBU's"))
					.append(make("dd").text(recipe.IBU + " (" + recipe.IBU_METHOD + ")"));
		// Add stats to header
		recipe_header.append(stats);

		var ingredients = make("div").addClass("recipe_ingedients");
		ingredients.append(make("h2").text("Ingredients"));
		ingredients.append(make("h3").text("Fermentables"));

		var fermentables = make("dl");
		var arr = recipe.FERMENTABLES.FERMENTABLE;
		for (var a = 0; a < arr.length; a++) {
			fermentables.append(make("dd").text(arr[a].NAME))
						.append(make("dt").text(arr[a].DISPLAY_AMOUNT));
		}

		ingredients.append(fermentables);

		ingredients.append(make("h3").text("Hops"));
		var hops = make("dl");
		arr = recipe.HOPS.HOP;
		var definition;
		for (a = 0; a < arr.length; a++) {
			hops.append(make("dt").text(arr[a].NAME));
			
			definition = arr[a].DISPLAY_AMOUNT + " ";

			if (arr[a].USE == "Aroma") {
				definition += "@Flameout, " + arr[a].DISPLAY_TIME + " Whirlpool / Hop Stand";
			} else if (arr[a].USE == "Dry Hop") {
				// BeerSmith is outputting dryhop display_time wrong, so we'll just calc it
				definition += arr[a].TIME / 24 / 60 + " day Dry Hop";
			} else {
				definition += "@" + arr[a].DISPLAY_TIME + " (" + arr[a].USE + ")";
			}
			hops.append(make("dd").text(definition));
		}
		ingredients.append(hops);


		ingredients.append(make("h3").text("Yeast"))
		
		if (recipe.YEASTS.YEAST.length === undefined) {
			arr = [recipe.YEASTS.YEAST]
		} else {
				arr = recipe.YEASTS.YEAST;
		}
		
		var yeast = make('ul');
		
		for (a = 0; a < arr.length; a++) {
			yeast.append(make('li').text(recipe.YEASTS.YEAST.NAME + " (" + recipe.YEASTS.YEAST.PRODUCT_ID + ")"))
		}

		ingredients.append(yeast);

		// Mash instructions
		var mash = make('div').addClass("mash_steps");
		mash.append(make("h3").text("Mash Instructions"));
		
		if (recipe.MASH.MASH_STEPS.MASH_STEP.length === undefined) {
			arr = recipe.MASH.MASH_STEPS.MASH_STEP[0];
		} else {
			arr = recipe.MASH.MASH_STEPS.MASH_STEP;
		}

		var mash_list = make('dl');

		for (a = 0; a < arr.length; a++) {
			mash_list.append(make("dt").text(arr[a].NAME + " (" + format(arr[a].STEP_TIME, 3) + " Minutes)"));
			mash_list.append(make("dd").text(arr[a].DESCRIPTION));
		}
		mash.append(mash_list);

		// Add header to $el
		$el.append(recipe_header);
		$el.append(ingredients);
		$el.append(mash);
	}

	$(".recipe_card").each(function(ind, el) {
		var $el = $(el);
		var recipe_name = $el.attr("data-recipe");
		$.ajax(
			{
				url: "/recipes/" + encodeURIComponent(recipe_name) + ".xml",
				type: "GET",
				success: build_card,
				context: $el,
			}
		);
	});
});

