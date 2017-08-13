var rootElement =
    React.createElement('div', {},
        React.createElement('h1', {}, "Movie Recommedation"),
            React.createElement('h3', {}, "Group Members:"),
            React.createElement('ul', {},
                React.createElement('li', {},
                    React.createElement('h4', {}, "Chao Mei"),
                    React.createElement('a', {href: 'mailto:12642171@student.uts.edu.au'}, '12642171@student.uts.edu.au')
                ),
                React.createElement('li', {},
                    React.createElement('h4', {}, "ShangYun Li"),
                    React.createElement('a', {href: 'mailto:12184735@student.uts.edu.au'}, '12184735@student.uts.edu.au')
                )
            )
    )

ReactDOM.render(rootElement, document.getElementById('react-app'))
