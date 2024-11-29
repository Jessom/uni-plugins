/**
 * 添加单位
 */
export const addUnit = (value = 'auto', unit = 'px') => {
	value = String(value)
	return validNumber(value) ? `${value}${unit}` : value
}

/**
 * 验证十进制数字
 */
export const validNumber = (value) => {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value)
}
