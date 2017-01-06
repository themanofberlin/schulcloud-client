import {
	Checkbox,
	CheckboxGroup,
	Icon,
	Input,
	RadioGroup,
	Row,
	Select,
	File,
	Textarea,
	ReactSelect,
	Form
} from '../../core/helpers/form';
import {Link} from 'react-router';

import Table from '../../administration/components/table';
import AdminSectionClasses from '../../administration/components/classes';

class SignupFormClasses extends AdminSectionClasses {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Administration: <br />Klassen</h1>

				<p>Sie können nun Klassen anlegen und diesen Lehrkräfte zuweisen.</p>

				<p><b>Tipp:</b> Lehrer können auch selber Klassen anlegen.</p>

				<Form>
					<div className="row">
						<div className="col-md-12">
							<Table head={this.getTableHead()} body={this.getTableBody()} />
						</div>
					</div>
				</Form>

				<button type="submit" className="btn btn-success" onClick={this.openModal.bind(this, this.defaultRecord)}>
					Klasse hinzufügen
				</button>

				{this.modalUI()}

				<hr />

				<p>Im <b>nächsten Schritt</b> können Sie Kurse anlegen:</p>

				<Link className="btn btn-secondary" to="/signup/courses/">Fortsetzen</Link>
			</div>
		);

	}

}

export default SignupFormClasses;



