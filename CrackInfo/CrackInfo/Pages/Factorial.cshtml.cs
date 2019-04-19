using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CrackInfo.Pages
{
    public class FactorialModel : PageModel
    {
        public int Number { get; set; }
        public int Result { get; set; }
        public bool IsCorrect { get; set; } = true;

        public void OnGet(int? number)
        {
            if (number == null || number < 1)
            {
                IsCorrect = false;
                return;
            }

            Number = number.Value;
            Result = 1;
            for (int i = 1; i <= number; i++)
            {
                Result *= i;
            }
        }

    }
}