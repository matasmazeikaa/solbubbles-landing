export type CapsuleBackground = 'gray' | 'yellow' | 'purple' | 'black';

export interface PaginationByPage {
	page: number
	pageSize: number
	pageCount: number
	total: number;
	withCount?: boolean
  }

export interface ITestimonial {
	text: string;
	fullName: string;
}

export interface ISubscriber {
	email: string;
	firstName: string;
}

export interface IBreadcrumb {
	name: string;
	to?: string;
}

export interface Strapi4Error {
error: {
	status: number
	name: string
	message: string
	details: Record<string, unknown>
}
}

export interface PaginationByOffset {
start: number
limit: number
withCount?: boolean
}

export interface Strapi4RequestParams {
fields?: Array<string>
populate?: string | Array<string> | object
sort?: string | Array<string>
pagination?: PaginationByOffset | PaginationByPage
filters?: Record<string, unknown>
publicationState?: 'live' | 'preview'
}

export interface Strapi4ResponseData<T> {
id: number,
attributes: T,
meta: Record<string, unknown>
}

export interface Strapi4Response<T> {
data: Strapi4ResponseData<T> | Strapi4ResponseData<T>[],
meta: Record<string, unknown>
}

export interface Strapi4ResponseSingle<T> {
data: Strapi4ResponseData<T>,
meta: Record<string, unknown>
}

export interface Strapi4ResponseMany<T> {
	data: Strapi4ResponseData<T>[],
	meta: Record<string, unknown>
  }

export interface IProperty {
	address: string;
	price: string;
	availableFrom: string;
	bedrooms: number;
	bathrooms: number;
	slug: string;
	about: string;
	images: {
		data: {
			attributes: {
				url: string;
				hash: string;
			}
		}[]
	};
	similarProperties?: {
		data: Strapi4ResponseData<IProperty>[];
	};
}

export interface IPageUrl {
	title: any;
	url: any;
}

export interface ICTAButton {
	text: string;
	page: Strapi4ResponseSingle<IPageUrl>;
}

export interface IHero {
	title?: string;
	subtitle?: string;
	backgroundImage?: Strapi4ResponseSingle<{hash: string}> | null;
	ctaButton?: ICTAButton[];
	values?: any;
}

export interface ISection {
	title?: string;
	description?: string;
	ctaButton?: ICTAButton;
	nameOverlay?: {
		title: string;
		subtitle: string;
	}
}

export interface IPage {
	hero: IHero;
	section: ISection[];
}

export interface ISeo {
	metaTitle: string;
	metaDescription: string;
}

export type StrapiPageResponse = Strapi4ResponseSingle<IPage> | null;

export const COMPONENT_CMS_MAP: any = {
	'sections.page-categories': 'SectionPageCategory',
	'shared.section-text-left-image-right': 'SectionTextLeftImageRight',
	'shared.section-text-right-image-left': 'SectionTextRightImageLeft',
	'shared.section-steps-with-background': 'SectionStepsWithBackground',
	'shared.section-yellow-background': 'SectionYellowBackground',
	'shared.section-steps': 'SectionSteps',
	'sections.hero-travel-guarantee-section': 'SectionTravelGuaranties',
};
