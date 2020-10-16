import { General } from './home_general.model';

export interface CPU extends General {
    base_clock : string;
    boost_clock : string;
    core_total : string;
    thread_total : string;
   
}

export interface GPU extends General {

}

export interface RAM extends General {
    speed : string;
    size : string;
}

export interface MotherBoard extends General {
    chipset : string;
    motherboard_type : string;
}