function copyCode() {
    const codeBlock = document.getElementById('code-block');
    const range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Code copied to clipboard!');
}

function copyCode2() {
    const codeBlock = document.getElementById('code-block-2');
    const range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Code copied to clipboard!');
}

function showAnswer(answerId, newAnswer) {
    var answerDisplay = document.getElementById(answerId);

    if (answerDisplay) {
        // Update the text content dynamically
        answerDisplay.textContent = newAnswer;

        // Show the answer with animation
        answerDisplay.classList.remove("hidden");
        answerDisplay.classList.add("visible");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById("watchDurationChart").getContext("2d");
    
    const data = {
        labels: ["Jobit", "Roku TV", "TV", "Friends"],
        datasets: [{
            label: "Total Watch Hours",
            data: [235.71, 269.89, 139.23, 7.84], // Values in hours
            backgroundColor:  ["#636efa", "#ef553b", "#00cc96", "#a95dfa"],
            
            borderColor: "#333",
            borderWidth: 1
        }]
    };
    
    const config = {
        type: "bar",
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: true },
            },
            animation: {
                duration: 2000,
                easing: "easeInOutBounce",
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
        plugins: [{
            afterDatasetsDraw: function(chart) {
                const ctx = chart.ctx;
                chart.data.datasets.forEach((dataset, i) => {
                    const meta = chart.getDatasetMeta(i);
                    meta.data.forEach((bar, index) => {
                        const data = dataset.data[index].toFixed(2) + " Hours";
                        ctx.fillStyle = "#000";
                        ctx.font = "bold 14px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText(data, bar.x, bar.y - 10);
                    });
                });
            }
        }]
    };
    
    new Chart(ctx, config);
});

document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById("deviceChart").getContext("2d");

    const data = {
        labels: [
            "LG 2019 MStar M3R Smart TV", "Roku Athens HDR Smart TV", 
            "DefaultWidevineAndroidPhone", "Android WidevineL3 Phone", 
            "Chrome PC (Cadmium)", "Safari MAC (Cadmium)", "Edge (Cadmium)", 
            "iPhone 15 Pro Max", "Windows Netflix App", 
            "LG 2020 RCA Smart TV", "LG 2017 UHD TV", "LG 2020 KONKA Smart TV"
        ],
        datasets: [{
            label: "Device Usage Count",
            data: [1117, 1059, 959, 679, 424, 97, 67, 34, 14, 10, 7, 5],
            backgroundColor: [
                "#636efa", "#ef553b", "#00cc96", "#a95dfa", 
                "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
                "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22"
            ],
            borderColor: "#333",
            borderWidth: 1
        }]
    };

    const config = {
        type: "bar",
        data: data,
        options: {
            responsive: true,
            indexAxis: "y",  // Horizontal bar chart for better readability
            plugins: {
                legend: { display: false },
                tooltip: { enabled: true },
            },
            animation: {
                duration: 2000,
                easing: "easeInOutBounce",
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    };

    new Chart(ctx, config);
});
