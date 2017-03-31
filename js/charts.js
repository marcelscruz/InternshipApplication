var ctx = document.getElementById("myChart").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ["HTML5", "CSS3", "JavaScript", "Illustrator", "Photoshop"],
				datasets: [{
					backgroundColor: [
						"#e74c3c",
						"#3498db",
						"#f1c40f",
						"#9b59b6",
						"#2ecc71"
					],
					data: [8, 7, 5, 5, 4]
				}]
			}
		});