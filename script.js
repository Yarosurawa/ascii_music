
//    __  __                                         _ __       __
//   / /_/ /_  ___  ____ ___  ___     ______      __(_) /______/ /_
//  / __/ __ \/ _ \/ __ `__ \/ _ \   / ___/ | /| / / / __/ ___/ __ \
// / /_/ / / /  __/ / / / / /  __/  (__  )| |/ |/ / / /_/ /__/ / / /
// \__/_/ /_/\___/_/ /_/ /_/\___/  /____/ |__/|__/_/\__/\___/_/ /_
//
//	Shoulda done it in ts ngl.
//

const Themes = { // Fuck javascript for not having enums
	LIGHT: { name:'light', class_name:'theme-light', icon:"wb_sunny" },
	DARK:  { name:'dark',  class_name:'theme-dark',  icon:"bedtime"  },
	// There could be more if I feel like it
}

let current_theme; //Theme enum value

function setTheme (theme_option /*Theme enum value*/) {
	current_theme = theme_option;
	document.querySelector("body").removeAttribute("class");
	document.querySelector("body").classList.add(theme_option.class_name);
	theme_sw_icon.textContent = theme_option.icon;
}

setTheme(Themes.DARK);
