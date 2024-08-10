import { userData } from './userData';

/**
 * @description ルーレット画面の処理をする
 */
function rouletteFunction(): void {
    // ここに処理
}

/**
 * @description 抽選に参加しているユーザーから1人選ぶ
 * @param objectForRoulette ユーザーデータが格納された配列
 * @returns ルーレットで選ばれたユーザーのデータ
 */
function getSelectedUser(objectForRoulette: userData[]): userData {
    // 当選してない人のみの配列を作る
    const noSelectedUser = objectForRoulette.filter((user) => user.winningOrder === null);
    // 当選していない人からランダムに1人選ぶ
    const selectedUser = noSelectedUser[Math.floor(g.game.random.generate() * noSelectedUser.length)];
    //todo: 動作確認してない
    return selectedUser;
}

/**
 * @description 抽選中のランダムに表示内容が変わる内容を実装する
 * @param objectForRoulette ユーザーデータが格納された配列
 */
function randomDisplay(objectForRoulette: userData[]): void {
    // ここに処理
}

/**
 * @description 抽選結果一覧(最新10件)を表示させる
 * @param objectForRoulette ユーザーデータが格納された配列
 */
function showRouletteResults(objectForRoulette: userData[]): void {
    const top10Users = objectForRoulette.filter((user) => user.winningOrder !== null).sort((a, b) => b.winningOrder - a.winningOrder).slice(0, 10);
    //todo: 動作確認してない
}

export = rouletteFunction;