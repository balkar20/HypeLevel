﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyWPFdictionary.dataBase
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class DictionaryContext : DbContext
    {
        static DictionaryContext()
        {
            //System.Data.Entity.Database.SetInitializer(new WordDbInitializer());
        }

        public DictionaryContext()
            : base("name=DictionaryConnection")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<WordWithTranslate> WordWithTranslates { get; set; }
    }
}
