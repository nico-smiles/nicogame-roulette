/***
 * ユーザーデータクラス
 */
class UserData {
    /***
     * ユーザーID
     */
    userId: number;
    /***
     * ユーザー名
     */
    userName?: string | null;
    /***
     * 自由入力の入力値
     */
    freeInputValue?: string | null;
    /***
     * 当選順
     */
    winningOrder?: number | null;
    /***
     * 放送者判定
     */
    isBroadcaster: boolean;
}

