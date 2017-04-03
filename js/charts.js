var ctx = document.getElementById("myChart").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labelsFontColor: "white",
				labels: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Illustrator", "Photoshop"],
				datasets: [{
					backgroundColor: [
						"#ed6a5c",
						"#5cb6f2",
						"#f2d048",
						"#9356dd",
						"#3e87b7",
						"#c78be0",
						"#58e292"
					],
					data: [8, 7, 5, 6, 4, 5, 4],
					borderWidth: "8",
					borderColor: "#F6F6F6",
					hoverBorderWidth: "0", 
					hoverBorderColor: "#F6F6F6",
				}]
			}
		});