List<Errors> _expectedRepo = JsonConvert.DeserializeObject<List<Errors>>(File.ReadAllText(@"C:\Users\edonis.seferi\Desktop\err.json")).ToList();
List<Errors> _allRepo = JsonConvert.DeserializeObject<List<Errors>>(File.ReadAllText(@"C:\Users\edonis.seferi\Desktop\result.json")).ToList();
void Main()
{
	_allRepo.ForEach(x => Modify(x));
	var corrections = _expectedRepo.Select(x => x.Expected).ToList();
	FindDiff(_allRepo);

	_allRepo.Dump();
}

List<Errors> FindDiff(List<Errors> set)
{
	var err = new List<Errors>();
	foreach (var element in set)
	{
		var actual = DateTime.Parse(element.ActualDateTime);
		var expected = DateTime.Parse(element.Expected.ExpectedAstronomicalDawnUtc);
		var difference = (actual - expected).TotalMinutes;
		if (difference > 60 || difference < -60) {
			err.Add(element);
		}
	}
	return err;
}

void Modify(Errors error)
{
	var target = error.Expected;
	target.ExpectedAstronomicalDawnUtc = target.LocalAstronmicalTwilightDawn.ToDate(target.Offset);
	target.ExpectedAstronomicalDuskUtc = target.LocalAstronmicalTwilightDusk.ToDate(target.Offset);
	target.ExpectedCivilDawnUtc = target.LocalCiviclTwilightDusk.ToDate(target.Offset);
	target.ExpectedCivilDuskUtc = target.LocalCivilTwilightDawn.ToDate(target.Offset);
	target.ExpectedNauticalDawnUtc = target.LocalNauticalTwilightDawn.ToDate(target.Offset);
	target.ExpectedNauticalDuskUtc = target.LocalNauticalTwilightDusk.ToDate(target.Offset);
}

public static class DExt
{
	public static string ToDate(this string time, double offset)
	{
		var span = TimeSpan.FromHours(offset * -1);
		var format = "dd-MM-yyyy HH:mm";
		var dateValue = $"01-01-2022 {time}";
		var date = DateTime.ParseExact(dateValue, format, null);
		var utcDate = date.Add(span);
		return utcDate.ToString("yyyy-MM-ddTHH:mm:ssZ");
	}
}

public partial class Errors
    {
        [JsonProperty("twilightUrl")]
        public Uri TwilightUrl { get; set; }

        [JsonProperty("timeZoneUrl")]
        public Uri TimeZoneUrl { get; set; }

        [JsonProperty("actualDateTime")]
        public string ActualDateTime { get; set; }
		
        [JsonProperty("expected")]
        public Expected Expected { get; set; }
    }

    public partial class Expected
    {
        [JsonProperty("LocalAstronmicalTwilightDawn")]
        public string LocalAstronmicalTwilightDawn { get; set; }

        [JsonProperty("LocalAstronmicalTwilightDusk")]
        public string LocalAstronmicalTwilightDusk { get; set; }

        [JsonProperty("LocalCivilTwilightDawn")]
        public string LocalCivilTwilightDawn { get; set; }

        [JsonProperty("LocalCiviclTwilightDusk")]
        public string LocalCiviclTwilightDusk { get; set; }

        [JsonProperty("LocalNauticalTwilightDawn")]
        public string LocalNauticalTwilightDawn { get; set; }

        [JsonProperty("LocalNauticalTwilightDusk")]
        public string LocalNauticalTwilightDusk { get; set; }

        [JsonProperty("Country")]
        public string Country { get; set; }

        [JsonProperty("City")]
        public string City { get; set; }

        [JsonProperty("Latitude")]
        public double Latitude { get; set; }

        [JsonProperty("Longitude")]
        public double Longitude { get; set; }

        [JsonProperty("Offset")]
        public double Offset { get; set; }

        [JsonProperty("ExpectedAstronomicalDawnUtc")]
        public string ExpectedAstronomicalDawnUtc { get; set; }

        [JsonProperty("ExpectedAstronomicalDuskUtc")]
        public string ExpectedAstronomicalDuskUtc { get; set; }

        [JsonProperty("ExpectedCivilDawnUtc")]
        public string ExpectedCivilDawnUtc { get; set; }

	[JsonProperty("ExpectedCivilDuskUtc")]
	public string ExpectedCivilDuskUtc { get; set; }

	[JsonProperty("ExpectedNauticalDawnUtc")]
	public string ExpectedNauticalDawnUtc { get; set; }

	[JsonProperty("ExpectedNauticalDuskUtc")]
	public string ExpectedNauticalDuskUtc { get; set; }
}