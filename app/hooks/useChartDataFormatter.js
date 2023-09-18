export const useChartDataFormatter = ({ data }) => {
  const groupedData = {};
  data?.forEach((item) => {
    const { jenis_bahan_galian, tahun, jumlah_produksi, satuan } = item;

    if (!groupedData[jenis_bahan_galian]) {
      groupedData[jenis_bahan_galian] = {
        name:jenis_bahan_galian
      };
    }

    groupedData[jenis_bahan_galian][tahun] = jumlah_produksi;
  });

  const result = Object.values(groupedData);

  return {
    result
  }
}