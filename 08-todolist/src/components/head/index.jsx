window.Head = class Head extends React.Component{
	constructor(props){
		super(props)
		// console.log(props.keydown)
		// console.log(this)

		//Second step
		//the way that son components execute parent components's function is
		//that parent components pass function to son components
		this.state = {
			onkeydown: props.keydown
		}
	}

	render() {
		// console.log(this.props.keydown)
		return (
			<header className="header">
				<h1>todos</h1>
				<input
					onKeyDown={this.state.onkeydown}
					className="new-todo"
					placeholder="What needs to be done?"
					autoFocus
				/>
			</header>
		);
	}
}
