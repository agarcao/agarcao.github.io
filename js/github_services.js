/**/

function counterGitHubCommits()
{
	var counter = 0;

	jQuery.ajaxSetup({async:false});

	// 1st - Get all the repositories
	jQuery.get(
		"https://api.github.com/users/agarcao/repos",
		function(data)
		{
			console.log(data);
			for (var i = data.length - 1; i >= 0; i--) {
				var reposObj = data[i];
				var reposName = reposObj["name"];
				jQuery.get(
					"https://api.github.com/repos/agarcao/"+ reposName +"/commits",
					function(data)
					{
						console.log(data.length);
						counter += data.length;
					}
				);
			}
		}
	);

	console.log("counter: "+counter);
	return counter;
}