import { AxiosPromise } from 'axios';

export type CallbackFunction = () => void;
export interface UserProps {
	name?: string;
	age?: number;
	id?: number;
}
export interface HasID {
	id?: number;
}

export interface ModelAttributes<T> {
	set(update: T): void;
	getAll(): T;
	get<K extends keyof T>(key: K): T[K];
}

export interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(data: T): AxiosPromise;
}

export interface Events {
	on(e: string, callback: CallbackFunction): void;
	trigger(e: string): void;
}
