export function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

export function haversineDistance(coord1: [number, number], coord2: [number, number]): number {
  const R = 6371;
  const dLat = toRadians(coord2[1] - coord1[1]);
  const dLon = toRadians(coord2[0] - coord1[0]);

  const lat1 = toRadians(coord1[1]);
  const lat2 = toRadians(coord2[1]);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}
