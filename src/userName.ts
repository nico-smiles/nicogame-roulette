import { userData } from './userData';

/**
 * @description ユーザー名取得画面の処理をする
 */
function userNameFunction(): void {

}

/**
 * @description ユーザー抽選モードの際、ユーザー名をobjectForRouletteに追加する
 * @param userId ユーザーID
 */
function addUser(userId: number): void {
    // ユーザー名を取得する処理
    const userName = '取得したユーザー名';
    // 放送者かどうかを判定する処理
    const isBroadcaster = false;

    const user: userData = {
        userId: userId,
        userName: userName,
        isBroadcaster: isBroadcaster
    }
    objectForRoulette.push(user);
}

export = userNameFunction;