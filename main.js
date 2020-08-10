$(document).ready(() => {
	getLanguage()
	typing()
})

getLanguage = () => {
	// TODO: load from local storage
	$.getJSON("./languages/en.json", (lang) => {
		// HEAD
		$("head title").text(lang.title)

		// BODY
		$("#about-title").text(lang.about.title)
		$("#about-desc").append($.parseHTML(lang.about.description))

		$("#projects-title").text(lang.projects.title)

		let projects = lang.projects.projects_list
		let row_no = 1 // get row number to append project
		let project_no = 1 // project number, each row has from 1 to 2
		for (var i=0; i<projects.length; i++) {
			if (i%2 == 0 && i != 0) {
				row_no++
				project_no = 1
			}
			// get DOM's project row
			let row_query = '[data-row-no="' + row_no + '"] [data-project-no="' + project_no + '"]'

			$(row_query + " .project-title").text(projects[i].title)
			$(row_query + " .project-description").append($.parseHTML(projects[i].description))
			project_no++
		}
	})
}

