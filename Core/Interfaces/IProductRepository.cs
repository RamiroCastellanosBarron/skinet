using Core.Entities;

namespace Core.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> GetProductByIdAsync(int id);
        Task<IEnumerable<Product>> GetProductsAsync();
        Task<IEnumerable<ProductType>> GetProductTypesAsync();
        Task<IEnumerable<ProductBrand>> GetProductBrandsAsync();
    }
}