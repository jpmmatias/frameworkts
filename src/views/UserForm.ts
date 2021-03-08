import { UserProps } from './../types.d';
import { User } from '../models/User';
import { View } from './View';
export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: (e?: string) => void } {
		return {
			'click:.changeName': this.changeUserName,
			'click:.changeAge': this.changeUserAge,
			'click:.save-model': this.saveModel,
		};
	}

	saveModel = (): void => {
		this.model.save();
	};

	changeUserName = (): void => {
		const input = this.parent.querySelector('input');
		if (input) {
			const name = input.value;
			this.model.setNewName(name);
		}
	};

	changeUserAge = (): void => {
		this.model.setNewAge('10');
	};

	template(): string {
		return `
    <div>
      <input placeholder="${this.model.get('name')}" class='inputName'/>
			<input placeholder="${this.model.get('age')}"  class='inputAge'/>
      <button class='changeName'>Change Name</button>
			<button class='changeAge'>Change Age</button>
			<button class='save-model'>Save User</button>
    <div>
    `;
	}
}
