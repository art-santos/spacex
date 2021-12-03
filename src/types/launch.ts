
export interface Mass{
    kg: Number;
    lb: Number;
}

export interface Payload {
    customers: [String]
    id: String
    manufacturer: String 
    nationality: String
    orbit: String
    payload_mass_kg: Number
    payload_mass_lbs: Number
    payload_type: String
    reused: Boolean
}

export interface InnerRocket {
    mass: Mass
}

export interface LaunchRocketSecondStage {
    payloads: [Payload]
}

export interface Links {
    mission_patch: String
    flickr_images: [String]
    article_link: String
    presskit: String
    video_link: String
    wikipedia: String
}

export interface LaunchesRocket{
    rocket_name: String

    second_stage: LaunchRocketSecondStage
    rocket: InnerRocket
}

export interface LaunchInterface {
    launch_date_utc: Date
    id: String
    mission_name: String
    launch_year: Number
    launch_success: Boolean
    details: String
    mission_id: [String]
    links: Links
    rocket: LaunchesRocket
}