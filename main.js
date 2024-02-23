
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
            var a = document.createElement('a');
            a.textContent = fileName;
            a.href = "#";
            a.onclick = function () {
                fetchMarkdownFile(filePath).then(renderMarkdownAsHTML);
            };
            li.appendChild(a);
            document.getElementById('markdownLinks').appendChild(li);
        }

        // Add your Markdown files with their corresponding file paths here
        var markdownFiles = [
            { name: "Markdown File 1", path: "file1.md" },
            { name: "Markdown File 2", path: "file2.md" },
            { name: "Markdown File 2", path: "file2.md" },
            { name: "ROCKET", path: "ROCKET: Exceptionally fast and accurate time series classification using random convolutional kernels.md" },
            { name: "TSC_Survey", path: "TSC_Survey.md" },
            { name: "InceptionTime", path: "InceptionTime.md" },
            { name: "LITE", path: "LITE.md" },
            // Add more files as needed
        ];

        // Add links for each Markdown file
        markdownFiles.forEach(function (file) {
            addMarkdownLink(file.name, file.path);
        });
