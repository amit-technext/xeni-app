

export type AgentCommandCenterUserDataType = {
    id: number
    name: string
    avatar: AvatarType,
    notification: number
    role: 'Admin'|'Moderator'|'Editor'
  }

  export type AvatarType =  {
    src: string,
    size: string
    status: 'online' | 'offline'
  }

  export type AgentProfileColumnType = {
    item: string;
    notification:string | null
  }

  export type AgentProfileRowType = 		{
    id: number
    name: string
    avatar: AvatarType,
    status: string
    role: string
    Date: string
    time: string
  }