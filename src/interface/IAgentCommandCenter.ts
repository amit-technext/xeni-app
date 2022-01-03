// import { AgentCommandCenterUserDataType } from "type/AgentCommandCenterType";

// import { AgentProfileColumnType, AgentProfileRowType } from "type/AgentCommandCenterType";

export interface IAgentCommandCenterRating {
  id: string
	name: string,
	value: string,
	percentage: string
}

export interface IAgentCommandCenterUser {
	// newUsers: number
	// userData: AgentCommandCenterUserDataType[]
	newUsers: number;
    userData: {
        id: number;
        name: string;
        avatar: {
            src: string;
            size: string;
            status: string;
        };
        notification: number;
        role: string;
    }[];
}

// export interface IAgentCommandCenterProfile {
//     column: AgentProfileColumnType[]
//     row: AgentProfileRowType[]
// }