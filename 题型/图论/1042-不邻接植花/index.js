/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var N = 4,
    paths = [
        [1, 2],
        [3, 4]
    ]
const gardenNoAdj = (N, paths) => {
    // 1. 构造通道，索引 0 对应花园 1
    const gardenPath = Array.from(Array(N), () => []);

    // 2. 填充数据
    for (let i = 0; i < paths.length; i++) {
        gardenPath[paths[i][0] - 1].push(paths[i][1]);
        gardenPath[paths[i][1] - 1].push(paths[i][0]);
    }

    // 3. 开始挖坑，拿好花种
    const result = Array.from(Array(N), () => '');
    const flowers = [1, 2, 3, 4];

    // 4. 开始填坑
    for (let i = 0; i < gardenPath.length; i++) {
        const path = gardenPath[i].map(item => result[item - 1]);
        const canUse = Array.from(new Set([...flowers].filter(item => !path.includes(item))));
        result[i] = canUse[0];
    }

    // 5. 去掉没用的坑
    return result;
};

console.log(gardenNoAdj(N, paths))