/// <reference path="../jquery/jquery.d.ts" />
// Type definitions for qtip2 v2.2.1
// Project: http://qtip2.com/
// Definitions by: Nathan Pitman <https://github.com/Seltzer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Notes:
//   - Type bindings for the QTip2 API and options are included. Bindings for global settings aren't required.
//   - Deprecated functionality is not supported.
//   - Where possible, things are strongly typed and 'any' is avoided.
//   - QTip2 includes a lot of shorthand notation for various expressions. These bindings support it all.



declare namespace QTip2 {
	type EventApiFunc = (event: Event, api: Api) => void;


	/**
	 * Content property
	 */
	type Title = string | JQuery | EventApiFunc | boolean | JQueryGenericPromise<any>;
	type Text = string | JQuery | EventApiFunc | boolean | JQueryGenericPromise<any>;

	interface Content {
		title?: Title | { text: Title };
		text?: Text;
		attr?: string;
		button?: string | JQuery | boolean;
	}


	/**
	 * Position property
	 */
	interface PositionAdjust {
		x?: number;
		y?: number;
		mouse?: boolean;
		resize?: boolean;
		scroll?: boolean;
		method?: string;
	}

	type Target = JQuery | number[] | string;

	interface Position {
		my?: string | boolean;
		at?: string | boolean;
		target?: Target | boolean;
		container?: JQuery | boolean;
		viewport?: JQuery | boolean;
		effect?: boolean | ((api: Api, pos: any, viewport: any) => void);
		adjust?: PositionAdjust;
	}


	/**
	 * Show property
	 */
	interface Show {
		target?: JQuery | boolean;
		event?: string | boolean;
		delay?: number;
		solo?: JQuery | string | boolean;
		ready?: boolean;
		effect?: boolean | ((offset: any) => void);
		modal?: boolean | Modal;
	}

	interface Modal
	{
		on?: boolean;
		blur?: boolean;
		escape?: boolean;
		stealfocus?: boolean;
		effect?: boolean | ((state: any) => void);
	}


	/**
	 * Hide property
	 */
	interface Hide {
		target?: JQuery | boolean;
		event?: string | boolean;
		delay?: number;
		inactive?: number | boolean;
		fixed?: boolean;
		leave?: string | boolean;
		distance?: number | boolean;
		effect?: boolean | ((offset: any) => void);
	}


	/**
	 * Style property
	 */
	interface Style {
		classes?: string | boolean;
		def?: boolean;
		widget?: boolean;
		width?: string | number | boolean;
		height?: string | number | boolean;
		tip?: string | boolean | Tip;
	}

	interface Tip {
		corner?: string | boolean;
		mimic?: string | boolean;
		border?: number | boolean;
		width?: number;
		height?: number;
		offset?: number;
	}


	/**
	 * Events property
	 */
	interface Events {
		render?: EventApiFunc;
		show?: EventApiFunc;
		hide?: EventApiFunc;
		toggle?: EventApiFunc;
		visible?: EventApiFunc;
		hidden?: EventApiFunc;
		move?: EventApiFunc;
		focus?: EventApiFunc;
		blur?: EventApiFunc;
	}


	/**
	 * Options
	 */
	interface QTipOptions {
		id?: string | boolean;
		prerender?: boolean;
		overwrite?: boolean;
		suppress?: boolean;
		metadata?: any;
		content?: Text | Content;
		position?: string | Position;
		style?: string | Style;
		show?: string | boolean | JQuery | Show;
		hide?: string | JQuery | Hide;
		events?: Events;
	}


	/**
	 * API
	 */
	interface Api {
		get(propertyName: 'id'): string | boolean;
		get(propertyName: 'prerender'): boolean;
		get(propertyName: 'overwrite'): boolean;
		get(propertyName: 'suppress'): boolean;
		get(propertyName: 'metadata'): any;
		get(propertyName: 'content'): Content;
		get(propertyName: 'content.text'): Text;
		get(propertyName: 'content.attr'): string;
		get(propertyName: 'content.title'): Title;
		get(propertyName: 'content.button'): string | JQuery | boolean;
		get(propertyName: 'position'): Position;
		get(propertyName: 'position.my'): string | boolean;
		get(propertyName: 'position.at'): string | boolean;
		get(propertyName: 'position.target'): Target | boolean;
		get(propertyName: 'position.container'): JQuery | boolean;
		get(propertyName: 'position.viewport'): JQuery | boolean;
		get(propertyName: 'position.effect'): boolean | ((api: any, pos: any, viewport: any) => void);
		get(propertyName: 'position.adjust'): PositionAdjust;
		get(propertyName: 'show'): Show;
		get(propertyName: 'show.target'): JQuery | boolean;
		get(propertyName: 'show.event'): string | boolean;
		get(propertyName: 'show.delay'): number;
		get(propertyName: 'show.solo'): JQuery | string | boolean;
		get(propertyName: 'show.ready'): boolean;
		get(propertyName: 'show.effect'): boolean | ((offset: any) => void);
		get(propertyName: 'show.modal'): boolean | Modal;
		get(propertyName: 'hide'): Hide;
		get(propertyName: 'hide.target'): JQuery | boolean;
		get(propertyName: 'hide.event'): string | boolean;
		get(propertyName: 'hide.delay'): number;
		get(propertyName: 'hide.leave'): string | boolean;
		get(propertyName: 'hide.distance'): number | boolean;
		get(propertyName: 'hide.effect'): boolean | ((offset: any) => void);
		get(propertyName: 'style'): Style;
		get(propertyName: 'style.classes'): string | boolean;
		get(propertyName: 'style.def'): boolean;
		get(propertyName: 'style.widget'): boolean;
		get(propertyName: 'style.width'): string | number | boolean;
		get(propertyName: 'style.height'): string | number | boolean;
		get(propertyName: 'style.tip'): string | boolean | Tip;
		get(propertyName: 'events'): Events;
		get(propertyName: 'events.render'): EventApiFunc;
		get(propertyName: 'events.show'): EventApiFunc;
		get(propertyName: 'events.hide'): EventApiFunc;
		get(propertyName: 'events.toggle'): EventApiFunc;
		get(propertyName: 'events.visible'): EventApiFunc;
		get(propertyName: 'events.hidden'): EventApiFunc;
		get(propertyName: 'events.move'): EventApiFunc;
		get(propertyName: 'events.focus'): EventApiFunc;
		get(propertyName: 'events.blur'): EventApiFunc;
		get(propertyName: string): any;

		set(properties: QTipOptions): Api;
		set(propertyName: 'id', value: string | boolean): Api;
		set(propertyName: 'prerender', value: boolean): Api;
		set(propertyName: 'overwrite', value: boolean): Api;
		set(propertyName: 'suppress', value: boolean): Api;
		set(propertyName: 'metadata', value: any): Api;
		set(propertyName: 'content', value: Text | Content): Api;
		set(propertyName: 'content.title', value: Title | { text: Title }): Api;
		set(propertyName: 'content.text', value: Text): Api;
		set(propertyName: 'content.attr', value: string): Api;
		set(propertyName: 'content.button', value: string | JQuery | boolean): Api;
		set(propertyName: 'position', value: Position): Api;
		set(propertyName: 'position.my', value: string | boolean): Api;
		set(propertyName: 'position.at', value: string | boolean): Api;
		set(propertyName: 'position.target', value: Target | boolean): Api;
		set(propertyName: 'position.container', value: JQuery | boolean): Api;
		set(propertyName: 'position.viewport', value: JQuery | boolean): Api;
		set(propertyName: 'position.effect', value: boolean | ((api: Api, pos: any, viewport: any) => void) ): Api;
		set(propertyName: 'position.adjust', value: PositionAdjust): Api;
		set(propertyName: 'show', value: Show): Api;
		set(propertyName: 'show.target', value: JQuery | boolean): Api;
		set(propertyName: 'show.event', value: string | boolean): Api;
		set(propertyName: 'show.delay', value: number): Api;
		set(propertyName: 'show.solo', value: JQuery | string | boolean): Api;
		set(propertyName: 'show.ready', value: boolean): Api;
		set(propertyName: 'show.effect', value: boolean | ((offset: any) => void)): Api;
		set(propertyName: 'show.modal', value: boolean | Modal): Api;
		set(propertyName: 'hide', value: Hide): Api;
		set(propertyName: 'hide.target', value: JQuery | boolean): Api;
		set(propertyName: 'hide.event', value: string | boolean): Api;
		set(propertyName: 'hide.inactive', value: number | boolean): Api;
		set(propertyName: 'hide.fixed', value: boolean): Api;
		set(propertyName: 'hide.leave', value: string | boolean): Api;
		set(propertyName: 'hide.distance', value: number | boolean): Api;
		set(propertyName: 'hide.effect', value: boolean | ((offset: any) => void)): Api
		set(propertyName: 'style', value: Style): Api;
		set(propertyName: 'style.classes', value: string | boolean): Api;
		set(propertyName: 'style.def', value: boolean): Api;
		set(propertyName: 'style.widget', value: boolean): Api;
		set(propertyName: 'style.width', value: string | number | boolean): Api;
		set(propertyName: 'style.height', value: string | number | boolean): Api;
		set(propertyName: 'style.tip', value: string | boolean | Tip): Api;
		set(propertyName: 'events', value: Events): Api;
		set(propertyName: 'events.render', value: EventApiFunc): Api;
		set(propertyName: 'events.show', value: EventApiFunc): Api;
		set(propertyName: 'events.hide', value: EventApiFunc): Api;
		set(propertyName: 'events.toggle', value: EventApiFunc): Api;
		set(propertyName: 'events.visible', value: EventApiFunc): Api;
		set(propertyName: 'events.hidden', value: EventApiFunc): Api;
		set(propertyName: 'events.move', value: EventApiFunc): Api;
		set(propertyName: 'events.focus', value: EventApiFunc): Api;
		set(propertyName: 'events.blur', value: EventApiFunc): Api;
		set(propertyName: string, value: any): Api;

		toggle(state?: boolean, event?: Event): Api;

		show(event?: Event): Api;

		hide(event?: Event): Api;

		disable(state?: boolean): Api;

		enable(): Api;

		reposition(event?: Event, effect?: boolean): Api;

		focus(event?: Event): Api;

		blur(event?: Event): Api;

		destroy(immediate?: boolean): Api;
	}
}