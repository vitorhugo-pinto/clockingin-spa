type checkPoint = {
  userId: string;
  timeStamp: Date;
  lunchBreak: boolean;
}

export type summaryType = {
  checkPoints: checkPoint[],
  workBalance: number,
  finishedShift: boolean

}

export type summaryTypeResponse = {
  success: boolean,
  message: string,
  data: {
    checkPoints: checkPoint[],
    workBalance: number,
    finishedShift: boolean
  }
  error: string
}

export type createCheckPointType = Omit<checkPoint, "id">;

