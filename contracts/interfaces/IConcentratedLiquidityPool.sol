// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity >=0.8.0;

/// @notice Trident Concentrated Liquidity Pool interface.
interface IConcentratedLiquidityPool {
    struct Tick {
        int24 previousTick;
        int24 nextTick;
        uint128 liquidity;
        uint256 feeGrowthOutside0;
        uint256 feeGrowthOutside1;
        uint160 secondsPerLiquidityOutside;
    }

    function ticks(int24 _tick) external view returns (Tick memory tick);

    function feeGrowthGlobal0() external view returns (uint256);

    function rangeSecondsInside(int24 lowerTick, int24 upperTick) external view returns (uint256);
}
