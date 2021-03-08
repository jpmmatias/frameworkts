import { Events, HasID, ModelAttributes, Sync } from '../types';
import { AxiosResponse } from 'axios';

export class Model<T extends HasID> {
	constructor(
		private attributes: ModelAttributes<T>,
		private events: Events,
		private sync: Sync<T>
	) {}

	on = this.events.on;
	trigger = this.events.trigger;
	get = this.attributes.get;

	set(update: T): void {
		this.attributes.set(update);
		this.events.trigger('change');
	}

	fetch(): void {
		const id = this.attributes.get('id');

		if (typeof id !== 'number') {
			throw new Error('Cannot fetch an id');
		}

		this.sync.fetch(id).then((res: AxiosResponse): void => {
			this.attributes.set(res.data);
		});
	}

	save(): void {
		const data = this.attributes.getAll();
		this.sync
			.save(data)
			.then((res: AxiosResponse) => {
				this.trigger('save');
			})
			.catch(() => {
				this.trigger('save');
			});
	}
}
