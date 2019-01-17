using System;
using System.IO;
using System.Reflection;

namespace Netree.HwAssetSyncRemedyNetEcm.CoreTest.Helpers
{
    public static class EmbeddedResourceHelper
    {
        public static string ReadAsString(Type type, string path)
        {
            using (var resourceStream = ReadAsStream(type, path))
            {
                if (resourceStream == null)
                {
                    throw new Exception($"Embedded resource '{path}' was not found.");
                }

                using (var reader = new StreamReader(resourceStream))
                {
                    return reader.ReadToEnd();
                }
            }
        }

        public static Stream ReadAsStream(Type type, string path)
        {
            var assembly = type.GetTypeInfo().Assembly;
            if (path.StartsWith("./") || path.StartsWith(".\\"))
            {
                path = $"{type.Namespace}.{path.Substring(2)}";
            }
            path = path.Replace("\\", ".").Replace("/", ".");
            
            return assembly.GetManifestResourceStream(path);
        }
    }
}
