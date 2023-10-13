
export interface GIFCategoryResponse {
    data:       GifData[];
    pagination: Pagination;
    meta:       Meta;
}

export interface GifData {
    name:          string;
    name_encoded:  string;
    subcategories: Subcategory[];
    gif:           GIF;
}

export interface GIF {
    type:              Type;
    id:                string;
    url:               string;
    slug:              string;
    bitly_gif_url:     string;
    bitly_url:         string;
    embed_url:         string;
    username:          string;
    source:            string;
    title:             string;
    rating:            Rating;
    content_url:       string;
    source_tld:        string;
    source_post_url:   string;
    is_sticker:        number;
    import_datetime:   string;
    trending_datetime: string;
    create_datetime:   string;
    update_datetime:   string;
    images:            Images;
    user?:             GifsUser;
}

export interface Images {
    "480w_still":             The480_WStill;
    fixed_width_still:        The480_WStill;
    fixed_height_downsampled: { [key: string]: string };
    preview_gif:              The480_WStill;
    preview:                  DownsizedSmall;
    fixed_height_small:       { [key: string]: string };
    downsized:                The480_WStill;
    fixed_width_downsampled:  { [key: string]: string };
    fixed_width:              { [key: string]: string };
    downsized_still:          The480_WStill;
    downsized_medium:         The480_WStill;
    original_mp4:             DownsizedSmall;
    downsized_large:          The480_WStill;
    preview_webp:             The480_WStill;
    original:                 { [key: string]: string };
    original_still:           The480_WStill;
    fixed_height_small_still: The480_WStill;
    fixed_width_small:        { [key: string]: string };
    looping:                  { [key: string]: string };
    downsized_small:          DownsizedSmall;
    fixed_width_small_still:  The480_WStill;
    fixed_height_still:       The480_WStill;
    fixed_height:             { [key: string]: string };
    hd?:                      DownsizedSmall;
}

export interface The480_WStill {
    height: string;
    size?:  string;
    url:    string;
    width:  string;
}

export interface DownsizedSmall {
    height:   string;
    mp4:      string;
    mp4_size: string;
    width:    string;
}

export enum Rating {
    G = "g",
    PG = "pg",
}

export enum Type {
    GIF = "gif",
    Text = "text",
}

export interface GifsUser {
    avatar_url:    string;
    banner_image:  string;
    banner_url:    string;
    profile_url:   string;
    username:      string;
    display_name:  string;
    description:   string;
    is_verified:   boolean;
    website_url:   string;
    instagram_url: string;
}

export interface Subcategory {
    name:         string;
    name_encoded: string;
}

export interface Meta {
    msg:         string;
    status:      number;
    response_id: string;
}

export interface Pagination {
    total_count: number;
    count:       number;
}
