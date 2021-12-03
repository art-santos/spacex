
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
}

export interface LaunchesRocket{
    rocket_name: String
    second_stage: LaunchRocketSecondStage
    rocket: InnerRocket
}


export interface LaunchesInterface {
    id: String
    mission_name: String
    launch_year: Number
    launch_success: Boolean
    mission_id: [String]
    links: Links
    rocket: LaunchesRocket
}
 
export interface Launches {
    map(arg0: (item: LaunchesInterface) => JSX.Element): {};
    launches: [LaunchesInterface]
}

export interface DataHome {
    data: Launches
}

export interface DataLaunch {

}