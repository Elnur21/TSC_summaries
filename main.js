
 // Function to fetch Markdown content from a file
        function fetchMarkdownFile(filePath) {
            return fetch(filePath)
                .then(response => response.text())
                .then(text => {
                    // Convert Markdown to HTML
                    return text;
                });
        }

        // Function to render Markdown content as HTML
        function renderMarkdownAsHTML(markdownContent) {
            document.getElementById('markdownContent').innerHTML = markdownContent;
        }

        // Function to add links to markdown files
        function addMarkdownLink(fileName, filePath) {
            var li = document.createElement('li');
            li.textContent = fileName;
            li.onclick = function () {
                fetchMarkdownFile(filePath).then(renderMarkdownAsHTML);
            };
            document.getElementById('markdownLinks').appendChild(li);
        }

        // Add your Markdown files with their corresponding file paths here
        var markdownFiles = [
            { name: "TSC_Survey", path: "TSC_Survey.md" },
            { name: "Review", path: "Deep learning for time series classification: a review.md" },
            { name: "UCR_Archive", path: "The UCR Time Series Archive.md" },
            { name: "A_Strong_Baseline", path: "Time Series Classification from Scratch with Deep Neural Networks: A Strong Baseline.md" },
            { name: "ROCKET", path: "ROCKET.md" },
            { name: "InceptionTime", path: "InceptionTime.md" },
            { name: "LITE", path: "LITE.md" },
            {name:"Disjoint-CNN",path:"Disjoint-CNN for Multivariate Time Series Classification.md"},
            {name:"Attention",path:"Attention.md"}
        ];

        // Add links for each Markdown file
        markdownFiles.forEach(function (file) {
            addMarkdownLink(file.name, file.path);
        });
