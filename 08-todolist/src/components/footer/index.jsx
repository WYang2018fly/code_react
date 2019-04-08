window.Footer = class Footer extends React.Component{

	render() {
		const list = this.props.data

		return (
			<footer className="footer">
				{/*!-- This should be `0 items left` by default --*/}
				<span className="todo-count"><strong>{list.length}</strong> item left</span>
				{/*!-- Remove this if you don't implement routing --*/}
				<ul className="filters">
					<li>
						<a href="#/">All</a>
					</li>
					<li>
						<a  className="selected" href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				{/*!-- Hidden if no completed items are left ↓ --*/}
				<button className="clear-completed">Clear completed</button>
			</footer>
		);
	}
}
