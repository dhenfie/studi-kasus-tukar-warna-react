class App extends React.Component {
    constructor (props) {
        super(props);

        // binding method agar mendapat context `this` class
        this.handleChangeColorClick = this.handleChangeColorClick.bind(this);
        this.state = {
            colorFirst: 'orange',
            colorLast: 'red'
        };
    }

    handleChangeColorClick(event) {
        if (this.state.colorFirst === 'orange') {
            this.setState({
                colorFirst: 'red',
                colorLast: 'orange'
            });
            return;
        }
        this.setState({
            colorFirst: 'orange',
            colorLast: 'red'
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className={'color color-' + this.state.colorFirst}>
                    <button type="button" className="button" onClick={this.handleChangeColorClick}>
                        Change Color ({this.state.colorLast})
                    </button>
                </div>
                <div className={'color color-' + this.state.colorLast}>
                    <button type="button" className="button" onClick={this.handleChangeColorClick}>
                        Change Color ({this.state.colorFirst})
                    </button>
                </div>
            </React.Fragment>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('container'));