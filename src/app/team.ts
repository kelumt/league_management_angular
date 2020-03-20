import { Player } from './player'

export interface Team {
    id : number;
    name : string;
    coach_for_team_id : number;
    players: Player[];
    average_score : number;
}