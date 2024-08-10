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
    // ここに処理
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
    // ここに処理
}

export = rouletteFunction;