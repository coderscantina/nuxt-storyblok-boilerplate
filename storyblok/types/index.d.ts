import {StoryblokStory} from 'storyblok-generate-ts'

export interface AllPostsStoryblok {
  _uid: string;
  component: "all-posts";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface AuthorStoryblok {
  profile?: AssetStoryblok;
  description?: string;
  _uid: string;
  component: "author";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface ButtonStoryblok {
  label: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "asset"}>;
  disabled?: boolean;
  color?: "red" | "lime" | "teal";
  variant: "" | "primary" | "outlined" | "ghost";
  block?: boolean;
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface ConfigStoryblok {
  menu?: MenuLinkStoryblok[];
  footer_about?: string;
  footerMenus?: FooterMenuStoryblok[];
  buttons?: ButtonStoryblok[];
  copyright?: string;
  _uid: string;
  component: "config";
  [k: string]: any;
}

export interface FactStoryblok {
  value?: string;
  color?: "" | "lime" | "red" | "teal";
  title?: string;
  annotate?: "" | "highlight" | "circle" | "underline";
  _uid: string;
  component: "fact";
  [k: string]: any;
}

export interface FaqStoryblok {
  question?: string;
  answer?: string;
  _uid: string;
  component: "faq";
  [k: string]: any;
}

export interface FeatureStoryblok {
  image?: AssetStoryblok;
  imagePosition: "left" | "inline" | "top";
  imageSize?: "" | "sm" | "md" | "lg";
  header?: string;
  bodytext?: string;
  _uid: string;
  component: "Feature";
  [k: string]: any;
}

export interface FooterMenuStoryblok {
  header?: string;
  menu?: MenuLinkStoryblok[];
  _uid: string;
  component: "footer-menu";
  [k: string]: any;
}

export interface GridStoryblok {
  content?: (
    | AllPostsStoryblok
    | AuthorStoryblok
    | ButtonStoryblok
    | ConfigStoryblok
    | FactStoryblok
    | FaqStoryblok
    | FeatureStoryblok
    | FooterMenuStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HomeStoryblok
    | HomeHeroStoryblok
    | ImageContentStoryblok
    | LogoStoryblok
    | LogoGridStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | PictureStoryblok
    | PostStoryblok
    | PostHeaderStoryblok
    | SimpletextStoryblok
    | SnippetStoryblok
    | VideoEmbedStoryblok
  )[];
  columns: "2" | "3" | "4";
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeroStoryblok {
  image?: AssetStoryblok;
  contentPadding?: "" | "sm" | "md" | "lg" | "xl";
  content?: (
    | AllPostsStoryblok
    | AuthorStoryblok
    | ButtonStoryblok
    | ConfigStoryblok
    | FactStoryblok
    | FaqStoryblok
    | FeatureStoryblok
    | FooterMenuStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HomeStoryblok
    | HomeHeroStoryblok
    | ImageContentStoryblok
    | LogoStoryblok
    | LogoGridStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | PictureStoryblok
    | PostStoryblok
    | PostHeaderStoryblok
    | SimpletextStoryblok
    | SnippetStoryblok
    | VideoEmbedStoryblok
  )[];
  clipTop?: "" | "left" | "right";
  clipBottom?: "" | "left" | "right";
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface HomeStoryblok {
  body?: (
    | AllPostsStoryblok
    | AuthorStoryblok
    | ButtonStoryblok
    | ConfigStoryblok
    | FactStoryblok
    | FaqStoryblok
    | FeatureStoryblok
    | FooterMenuStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HomeStoryblok
    | HomeHeroStoryblok
    | ImageContentStoryblok
    | LogoStoryblok
    | LogoGridStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | PictureStoryblok
    | PostStoryblok
    | PostHeaderStoryblok
    | SimpletextStoryblok
    | SnippetStoryblok
    | VideoEmbedStoryblok
  )[];
  menu?: MenuLinkStoryblok[];
  ogImage?: AssetStoryblok;
  _uid: string;
  component: "home";
  [k: string]: any;
}

export interface HomeHeroStoryblok {
  header?: string;
  bodytext?: string;
  image?: AssetStoryblok;
  buttons?: ButtonStoryblok[];
  logos?: LogoGridStoryblok[];
  _uid: string;
  component: "home-hero";
  [k: string]: any;
}

export interface ImageContentStoryblok {
  image?: AssetStoryblok;
  order: "left" | "right";
  content?: (
    | AllPostsStoryblok
    | AuthorStoryblok
    | ButtonStoryblok
    | ConfigStoryblok
    | FactStoryblok
    | FaqStoryblok
    | FeatureStoryblok
    | FooterMenuStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HomeStoryblok
    | HomeHeroStoryblok
    | ImageContentStoryblok
    | LogoStoryblok
    | LogoGridStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | PictureStoryblok
    | PostStoryblok
    | PostHeaderStoryblok
    | SimpletextStoryblok
    | SnippetStoryblok
    | VideoEmbedStoryblok
  )[];
  class?: "" | "full" | "narrow" | "narrow-lg";
  contentPadding?: "" | "sm" | "md" | "lg" | "xl";
  imageFit?: "" | "contain" | "cover";
  _uid: string;
  component: "image-content";
  [k: string]: any;
}

export interface LogoStoryblok {
  image: AssetStoryblok;
  link: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "logo";
  [k: string]: any;
}

export interface LogoGridStoryblok {
  header?: string;
  logos?: LogoStoryblok[];
  _uid: string;
  component: "logoGrid";
  [k: string]: any;
}

export interface MenuLinkStoryblok {
  label?: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "asset"}>;
  _uid: string;
  component: "menu_link";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | AllPostsStoryblok
    | AuthorStoryblok
    | ButtonStoryblok
    | ConfigStoryblok
    | FactStoryblok
    | FaqStoryblok
    | FeatureStoryblok
    | FooterMenuStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HomeStoryblok
    | HomeHeroStoryblok
    | ImageContentStoryblok
    | LogoStoryblok
    | LogoGridStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | PictureStoryblok
    | PostStoryblok
    | PostHeaderStoryblok
    | SimpletextStoryblok
    | SnippetStoryblok
    | VideoEmbedStoryblok
  )[];
  topMargin?: "" | "large";
  ogImage?: AssetStoryblok;
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PictureStoryblok {
  image: AssetStoryblok;
  note?: string;
  class?: "" | "narrow";
  _uid: string;
  component: "picture";
  [k: string]: any;
}

export interface PostStoryblok {
  title?: string;
  publishedAt?: string;
  teaser?: AssetStoryblok;
  intro?: string;
  content?: (
    | AllPostsStoryblok
    | AuthorStoryblok
    | ButtonStoryblok
    | ConfigStoryblok
    | FactStoryblok
    | FaqStoryblok
    | FeatureStoryblok
    | FooterMenuStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HomeStoryblok
    | HomeHeroStoryblok
    | ImageContentStoryblok
    | LogoStoryblok
    | LogoGridStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | PictureStoryblok
    | PostStoryblok
    | PostHeaderStoryblok
    | SimpletextStoryblok
    | SnippetStoryblok
    | VideoEmbedStoryblok
  )[];
  _uid: string;
  component: "Post";
  [k: string]: any;
}

export interface PostHeaderStoryblok {
  _uid: string;
  component: "post-header";
  [k: string]: any;
}

export interface SimpletextStoryblok {
  subheader?: string;
  logo?: AssetStoryblok;
  header?: string;
  bodytext?: string;
  cols?: "" | "2-8" | "3-9" | "4-10" | "6-12" | "7-13" | "8-14";
  class?: "" | "narrow";
  align?: "left" | "center" | "right";
  _uid: string;
  component: "simpletext";
  [k: string]: any;
}

export interface SnippetStoryblok {
  title?: string;
  language: string;
  code?: string;
  class?: "" | "narrow";
  _uid: string;
  component: "snippet";
  [k: string]: any;
}

export interface VideoEmbedStoryblok {
  link: string;
  class?: "" | "narrow";
  _uid: string;
  component: "video-embed";
  [k: string]: any;
}
