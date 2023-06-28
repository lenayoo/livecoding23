'use strict'
/*
この配列を操作して、isDisplay: trueのカテゴリ、サブカテゴリだけを抽出した配列を作成してください。
（現状のオブジェクト構造を維持したまま）
カテゴリが isDisplay: false ならそのサブカテゴリも非表示です。

※調べ物をして頂いても問題ありません
※一発で正解する必要はなく、デバッグしながらで大丈夫です
※詰まったときは質問をして頂いて、ペアプロ感覚でできればと思います

期待される結果
```
[
  {
    name: 'A',
    isDisplay: true,
    subCategories: [
      {
        name: 'a1',
        isDisplay: true
      }
    ]
  },
  {
    name: 'C',
    isDisplay: true,
    subCategories: []
  }
]
```
*/

const categories = [
  {
    name: 'A',
    isDisplay: true,
    subCategories: [
      {
        name: 'a1',
        isDisplay: true,
      },
      {
        name: 'a2',
        isDisplay: false,
      },
    ],
  },
  {
    name: 'B',
    isDisplay: false,
    subCategories: [
      {
        name: 'b1',
        isDisplay: false,
      },
    ],
  },
  {
    name: 'C',
    isDisplay: true,
    subCategories: [],
  },
]

// ここから下を編集し、RUNを押して開発者ツールのコンソールで確認してください

let result = []

categories.forEach((category) => {
  if (category.isDisplay) {
    result.push(category)
  }

  category.subCategories.forEach((subCategory) => {
    if (subCategory.isDisplay) {
      result.push(subCategory)
    }
  })
})

document.getElementById('output').innerText = JSON.stringify(result, null, 2)

console.log(result)

const resultCoco = categories
  .filter((category) => category.isDisplay)
  .map((category) => {
    const copy = { ...category }
    copy.subCategories = copy.subCategories.filter((s) => s.isDisplay)
    return copy
  })

document.getElementById('coco').innerText = JSON.stringify(resultCoco, null, 2)
